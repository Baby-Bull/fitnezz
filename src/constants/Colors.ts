// import { fade } from 'libs/ColorManipulator';

import { Unbox } from "@/types/utilType";

// https://www.figma.com/file/gLjNH8huh2630399avCDZQc4/%E6%96%B0ClipLine%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2?node-id=172%3A38
export const COLORS = {
  // Brand Colors
  brandColorLeft = "#92A3FD",
  brandColorRight = "#9DCEFF",

  // Secondary Color
  secondaryColorLeft = "#C58BF2",
  secondaryColorRight = "#EEA4CE",

  // Theme colors
  backColor = "#1D1617",
  whiteColor = "#FFFFFF",

  // Gray colors
  gray1 = "#7B6F72",
  gray2 = "#ADA4A5",
  gray3 = "#DDDADA",

  // Border color
  borderColor = "#F7F8F8",

  // コーポレートカラー *****************************************
  corporate: "#002482",

  gray40: "#848484",
  gray20: "#BDC0CD",

  red40: "#FB7181",

  // 学習者カラー
  student: "#26b297",
  // 指導者カラー
  coach: "#E89433",

  // color pallete
  black: "#000",
  // blackFade4: fade('#000', 0.04),
  // blackFade8: fade('#000', 0.08),
  // blackFade11: fade('#000', 0.11),
  // blackFade12: fade('#000', 0.12),
  // blackFade14: fade('#000', 0.14),
  // blackFade20: fade('#000', 0.2),
  // blackFade24: fade('#000', 0.24),
  // blackFade26: fade('#000', 0.26),
  // blackFade48: fade('#000', 0.48),
  // blackFade50: fade('#000', 0.5),
  // blackFade87: fade('#000', 0.87),
  blackishGray: "#555",
  blackWeak: "#090B0A",
  weak: "#FFF7F6",
  weakness: "#F8F8F8",
  white: "#fff",
  // whiteFade20: fade('#fff', 0.2),
  // whiteFade60: fade('#fff', 0.6),
  // green120: '#2C9C86',
  // green110: '#27b297',
  // green100: '#26b297',
  // green100Fade80: fade('#26b297', 0.8),
  // green100Fade50: fade('#26b297', 0.5),
  // green100Fade20: fade('#26b297', 0.2),
  // green100Fade4: fade('#26b297', 0.04),
  // green80: '#51C1AC',
  // green80Fade80: fade('#51C1AC', 0.8),
  green60: "#7DD1C1",
  green50: "#4AA492",
  green40: "#A8E0D5",
  green30: "#4CBCA6",
  green20: "#D4F0EA",
  green10: "#E9F7F5",
  // green10Fade50: fade('#E9F7F5', 0.5),
  // green5: '#F4FBFA',
  // green5Fade50: fade('#F4FBFA', 0.5),
  greenHover: "#219d85",
  orange100: "#E89433",
  orange80: "#eda95c",
  orange60: "#f1bf85",
  orange40: "#f6d4ad",
  orange20: "#faead6",
  orange10: "#fdf4eb",
  orange5: "#fefaf5",
  red100: "#E9331A",
  red80: "#F4513B",
  // red80Fade20: fade('#F4513B', 0.2),
  // red60: '#ff8383',
  // red100Fade04: fade('#E9331A', 0.04),
  // red60Fade04: fade('#ff8383', 0.04),
  // gray100: '#444444',
  // gray100Fade04: fade('#444444', 0.04),
  // gray100Fade17: fade('#444444', 0.17),
  // gray100Fade25: fade('#444444', 0.25),
  // gray100Fade70: fade('#444444', 0.7),
  // gray100Fade80: fade('#444444', 0.8),
  // gray100Fade90: fade('#444444', 0.9),
  // gray80: '#757575',
  // gray80Fade80: fade('#757575', 0.8),
  gray60: "#a3a3a3",
  gray50: "#868686",
  gray30: "#c4c4c4",
  gray15: "#ebebeb",
  gray10: "#fafafa",
  gray5: "#fcfcfc",
  grayweak: "#f4f4f4",
  // gray5Fade80: fade('#fcfcfc', 0.8),
  gray102: "#666667",
  gray221: "#dddedf",
  glayshWhite: "#FCFCFC",
  gray4: "#4B4B4B",
  transparent: "transparent",
  blue500: "#3f51b5",
  blue50: "#e3f2fd",
  pink500: "#e91e63",
  pink50: "#fce4ec",
} as const;

export default COLORS;

export type Color = Unbox<typeof COLORS>;
