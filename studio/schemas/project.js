export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    { name: "place", type: "string" },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "school", title: "School" },
          { value: "clone", title: "Clone" },
          { value: "client", title: "Client" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
