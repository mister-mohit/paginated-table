

export const getColumns = (filteredTags) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "UserID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      filters: [
        {
          text: "History",
          value: "history",
        },
        {
          text: "America",
          value: "american",
        },
        {
          text: "Crime",
          value: "crime",
        },
        {
          text: "French",
          value: "french",
        },
        {
          text: "Fiction",
          value: "fiction",
        },
        {
          text: "English",
          value: "english",
        },
        {
          text: "Magical",
          value: "magical",
        },
        {
          text: "Love",
          value: "love",
        },
        {
          text: "Classic",
          value: "classic",
        },
        {
          text: "Mystery",
          value: "mystery",
        },
      ],
      // eslint-disable-next-line react/prop-types
      filteredValue: filteredTags,
      onFilter: (value, record) => {
        return record.tags.includes(value);
      },
    },
    {
      title: "Reactions",
      dataIndex: "reactions",
      key: "reactions",
    },
  ];

  return columns;
};
