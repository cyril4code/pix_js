export default {
  name: "pin",
  title: "pin",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "about", title: "About", type: "string" },
    { name: "destination", title: "Destination", type: "url" },
    { name: "category", title: "Category", type: "string" },
    {
      name: "image",
      title: "Image",
      options: { hotspot: true },
      type: "image",
    },
    { name: "usedId", title: "UserId", type: "string" },
    { name: "postedBy", title: "PostedBy", type: "postedBy" },
    { name: "save", title: "Save", type: "array", of: [{ type: "save" }] },
    {
      name: "comment",
      title: "Comment",
      type: "string",
      of: [{ type: "comment" }],
    },
  ],
};
