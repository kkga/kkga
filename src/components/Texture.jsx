export default function Texture() {
  return (
    <div className="absolute -z-10 top-0 bottom-0 left-0 right-0 w-full h-full">
      <svg
        className="absolute -z-10 top-0 bottom-0 left-0 right-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="filter">
          <feTurbulence baseFrequency=".005" numOctaves="50" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
          </feComponentTransfer>
          <feConvolveMatrix kernelMatrix="1 0 1
                                        0 -4 0
                                        1 0 1" />
          <feColorMatrix values="0 0 0 -1 1
                               0 0 0 -1 1
                               0 0 0 -1 1
                               0 0 0  0 1" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#filter)"
        />
      </svg>
    </div>
  );
}
