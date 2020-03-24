const blockTools = require('@sanity/block-tools');

const getHeaderBlock = (headerType, text) => {
  return {
  "style": `h${headerType}`,
  "markDefs": [],
  "_type": "block",
    "children": [
      {
        "_type" : "span",
        "text": `${text}`,
        "markDefs": [],
      }
    ]
  };
};

const getReferenceBlock = (id) => {
  return {
    "_type": "reference",
    "_ref": `${id}`,
  }
};

const getParagraphBlock = (items) => {
  if (items)
    return {
      "style": "normal",
      "_type": "block",
      "markDefs": [],
      "children": items
    };

  return null;
};

const getSpanBlock = (text, isBold) => {
  return {
    "_type": "span",
    "text": text,
    "marks": isBold ? ["emphasis"] : [],
    "markDefs": [],
  };
};


const getListItemBlock = (text) => {
  return {
    "markDefs": [],
    "_type": "block",
    "listItem": "bullet",
    "children": [
      {
        "_type" : "span",
        "text": `${text}`,
        "markDefs": [],
      }
    ]
  };
}

const parserStrategy = (richTextItem) => {
  if (richTextItem.nodeType.startsWith('text')) {
    const isBold = richTextItem.marks && richTextItem.marks.find(x => x.type === "bold");
    return getSpanBlock(richTextItem.value, isBold);
  }

  if (richTextItem.nodeType.startsWith('heading')){
    const headerType = richTextItem.nodeType.substring(richTextItem.nodeType.length - 1);
    return getHeaderBlock(headerType, richTextItem.content[0].value);
  }

  if (richTextItem.nodeType.startsWith('ordered-list')){
    return richTextItem.content.map(x => {
      return getListItemBlock(x.content[0].content[0].value)
    })
  }

  if (richTextItem.nodeType.startsWith('embedded-entry-block')) {
    const id = richTextItem.data.target.sys.id;

    if (id && typeof id !== undefined && id !== null)
      return getReferenceBlock(id);
  }

  if (richTextItem.nodeType.startsWith('paragraph')){
    // get each paragraph item and put it back in
    const children = [];
    richTextItem.content.forEach(item => children.push(parserStrategy(item)));

    return getParagraphBlock(children.filter(x => x !== null));
  }

  return null;
};

module.exports = (input, options) => {
  const data = input;
  const resultingBlocks = [];
  if (data && data.content){
    data.content.forEach(item => {
      const strategy = parserStrategy(item);
      if (strategy !== null){
        if (Array.isArray(strategy)){
          strategy.forEach(x => {
            resultingBlocks.push(x);
          })
        }
        else {
          resultingBlocks.push(strategy);
        }
      }

    });
  }

  return resultingBlocks.filter(x => x !== null);
};
