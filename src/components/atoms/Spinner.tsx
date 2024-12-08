import "@/assets/styles/spinner.css";
import React from "react";

type Size = "extra-small" | "small" | "large" | "extra-large" | "2-extra-large";
type Variant = "primary" | "default";
function Spinner({ size, variant }: { size?: Size; variant?: Variant }) {
  const fill1 = variant ? (variant === "primary" ? "blue" : "#fff") : "blue";
  const fill2 = variant
    ? variant === "primary"
      ? "orange"
      : "#fff"
    : "orange";
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`loader-svg ${size ? size : "small"}`}
      >
        <path
          d="M107.48 107.48C108.46 108.46 108.463 110.054 107.445 110.995C99.4696 118.368 89.7371 123.6 79.1579 126.179C67.7645 128.957 55.8269 128.55 44.6488 125.004C33.4706 121.459 23.4816 114.91 15.7724 106.073C8.06322 97.2355 2.93028 86.4502 0.934053 74.8943C-1.06217 63.3384 0.155063 51.4562 4.45285 40.545C8.75064 29.6339 15.9637 20.1133 25.3045 13.0229C34.6454 5.93255 45.7547 1.54494 57.4197 0.339187C68.251 -0.780403 79.1747 0.883338 89.1616 5.15361C90.4365 5.69875 90.9681 7.20113 90.3734 8.45368C89.7786 9.70623 88.2829 10.2342 87.0062 9.69332C77.852 5.81522 67.852 4.30878 57.9359 5.33377C47.1862 6.44492 36.9484 10.4883 28.3404 17.0224C19.7325 23.5565 13.0853 32.3301 9.12469 42.3852C5.16409 52.4403 4.04235 63.3903 5.88196 74.0396C7.72157 84.6889 12.4518 94.628 19.5562 102.772C26.6605 110.915 35.8658 116.951 46.167 120.218C56.4682 123.486 67.4691 123.86 77.9686 121.301C87.6539 118.94 96.569 114.166 103.892 107.441C104.913 106.504 106.499 106.499 107.48 107.48Z"
          fill={fill1}
          className="rotate-clockwise"
        />
        <path
          d="M19.904 54.8098C18.8983 54.5913 18.2566 53.5977 18.5144 52.6015C20.5337 44.7972 24.5092 37.6243 30.0783 31.7678C36.0761 25.4605 43.6914 20.9224 52.093 18.649C60.4945 16.3756 69.3592 16.4543 77.719 18.8765C86.0789 21.2987 93.6125 25.9712 99.4973 32.384C105.382 38.7967 109.392 46.7031 111.089 55.2398C112.785 63.7765 112.104 72.6153 109.119 80.791C106.134 88.9668 100.96 96.1652 94.1617 101.6C87.8494 106.647 80.3622 109.993 72.4136 111.336C71.3989 111.508 70.4639 110.783 70.3324 109.762C70.2009 108.742 70.9227 107.812 71.9368 107.637C79.2082 106.383 86.0557 103.31 91.8346 98.6896C98.0993 93.6809 102.867 87.0472 105.618 79.5129C108.369 71.9786 108.997 63.8332 107.433 55.9663C105.87 48.0994 102.175 40.8133 96.7515 34.9037C91.3284 28.994 84.3859 24.6881 76.6819 22.4559C68.9779 20.2237 60.8088 20.1512 53.0664 22.2463C45.324 24.3413 38.3061 28.5234 32.7789 34.3358C27.6804 39.6975 24.0312 46.2563 22.1591 53.3935C21.898 54.3889 20.9096 55.0283 19.904 54.8098Z"
          fill={fill2}
          className="rotate-counterclockwise"
        />
      </svg>
    </div>
  );
}

export default Spinner;