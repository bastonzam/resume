import SnowFall from "snow-fall-effect";

export default ({ app }, inject) => {
  inject(
    "snowFall",
    (() => {
      const snowFall = new SnowFall({
        color: "#82deed",
        density: 1,
        sizeRange: [5, 25],
      });
      return snowFall;
    })()
  );
};