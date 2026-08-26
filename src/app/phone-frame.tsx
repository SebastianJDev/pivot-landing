import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: 280,
        padding: 6,
        border: "1.5px solid #888c92",
        borderRadius: 40,
        background: "linear-gradient(145deg, #1a1c20, #4a4e55 40%, #15171a)",
        boxShadow:
          "0 40px 80px rgba(15,25,40,.28), inset 0 0 0 1px rgba(255,255,255,.2)",
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 78,
          height: 21,
          borderRadius: 20,
          background: "#111",
          zIndex: 2,
        }}
      />
      <div
        style={{
          overflow: "hidden",
          borderRadius: 34,
          background: "#fff",
          position: "relative",
        }}
      >
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
