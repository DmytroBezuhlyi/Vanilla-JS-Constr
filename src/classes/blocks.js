import { col, css, row } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error("Method toHtml should be implemented.");
  }
}

class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { tag = "h1", styles = "" } = this.options;
    return row(col(`<${ tag }>${ this.value }<${ tag }>`), css(styles));
  }
}

class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { styles = "", imageStyles = "", alt = "" } = this.options;
    return row(`<img src="${ this.value }"  alt="${ alt }" style="${css(imageStyles)}"/>`, css(styles));
  }
}

class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { styles = "" } = this.options;
    return row(col(`<p>${ this.value }</p>`), css(styles));
  }
}

class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const { styles = "" } = this.options;
    return row(this.value.map(col).join(""), css(styles));
  }
}

export { TitleBlock, ImageBlock, TextBlock, ColumnsBlock };