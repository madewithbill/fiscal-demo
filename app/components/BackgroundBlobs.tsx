import styles from "@/app/index.module.css";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 z-1 bg-[url(/noise.svg)] bg-repeat opacity-5 bg-blend-hard-light" />
      <div className="absolute inset-0 blur-[150px]">
        <div
          className={`${styles.animateBlob1} absolute right-114 bottom-0 z-4 h-100 w-82 bg-[#bc3e1b]`}
        />
        <div
          className={`${styles.animateBlob2} absolute -right-32 -bottom-80 z-3 size-200 rounded-full bg-radial from-[#dd7804] from-40% to-[#dd7804]/20`}
        />
        <div
          className={`${styles.animateBlob3} absolute -top-10 right-78 z-2 h-100 w-90 bg-white`}
        />
        <div
          className={`${styles.animateBlob4} absolute -top-138.5 left-55.75 z-1 size-215 rounded-full bg-radial from-[#0AB5D3] from-40% to-[#0AB5D3]/20`}
        />
      </div>
    </div>
  );
}
