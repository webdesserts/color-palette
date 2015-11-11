export function hsl2rgb (hsl: { h: number, s: number, l: number }) : { r: number, g: number, b: number } {
  let { h, s, l } = hsl;
  let t1, t2, t3, rgb, val;

  h /= 360;
  s /= 100;
  l /= 100;

  if (s == 0) {
    val = Math.round(l * 255);
    return { r: val, g: val, b: val };
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;
    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = Math.round(val * 255);
  }
  return { r: rgb[0], g: rgb[1], b: rgb[2] }
}

export function rgb2hsl (rgb: {r: number, g: number, b: number}) : {h: number, s: number, l: number} {
  let { r, g, b } = rgb;
  let h, s, l, min, max, delta;

  r /= 255;
  g /= 255;
  b /= 255;

  min = Math.min(r, g, b);
  max = Math.max(r, g, b);
  delta = max - min;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;
  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;
  l = (min + max) / 2;
  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  s *= 100;
  l *= 100;

  return { h, s, l };
}
