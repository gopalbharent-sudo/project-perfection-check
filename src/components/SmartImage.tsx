import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  /** Classes for the <img> itself. */
  className?: string;
  /** Classes for the wrapper (controls aspect ratio / rounding). */
  wrapperClassName?: string;
  width?: number;
  height?: number;
  /** Above-the-fold images load eagerly and are fetched with high priority. */
  priority?: boolean;
  sizes?: string;
};

/**
 * Image that never silently disappears:
 * - reserves space (no layout shift) and shows a gold shimmer while loading
 * - fades in smoothly once decoded
 * - automatically retries a failed request (up to 2 times) before giving up
 */
export function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  width,
  height,
  priority = false,
  sizes,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Images restored from bfcache / already cached fire no load event.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true);
  }, [attempt]);

  const resolvedSrc = attempt === 0 ? src : `${src}${src.includes("?") ? "&" : "?"}r=${attempt}`;

  return (
    <div className={`img-shell ${loaded ? "is-loaded" : ""} ${wrapperClassName}`}>
      <img
        ref={imgRef}
        key={resolvedSrc}
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (attempt < 2) {
            const next = attempt + 1;
            window.setTimeout(() => setAttempt(next), 400 * next);
          }
        }}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-out`}
      />
    </div>
  );
}
