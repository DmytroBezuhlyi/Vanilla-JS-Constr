import image from "./assets/JavaScript-logo.png";
import { TitleBlock, TextBlock, ImageBlock, ColumnsBlock } from "./classes/blocks";

export const model = [
  new TitleBlock(
    "Pure JS site constructor - cut version",
    {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, blue, teal)",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  ),
  new TextBlock(
    "Here we go with some text",
    {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    },
  ),
  new ColumnsBlock(
    [
      "Pure JS app w/o using libraries",
      "You'll know how work SOLID and OOP principles in JS",
      "JS - it's simple and interesting. Learn how to create any UI by yourself",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    },
  ),
  new ImageBlock(
    image,
    {
      styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center",
      },
      imageStyles: {
        width: "500px",
        height: "auto",
      },
      alt: "IMaGe",
    },
  ),
];