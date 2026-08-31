import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="phone-frame">
      <div className="phone-frame-notch" aria-hidden="true" />
      <div className="phone-frame-screen">
        <Image
          src={src}
          alt={alt}
          width={268}
          height={580}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "top",
            marginTop: -32,
          }}
          unoptimized
        />
      </div>
    </div>
  );
}
