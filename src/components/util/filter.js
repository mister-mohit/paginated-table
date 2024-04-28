export const filterData = (data, search, filteredTags) => {
  const posts = data ? data : [];
  console.log(posts);
  const finalData = posts
    ?.filter((post) => {
      return filteredTags.length > 0
        ? filteredTags.some((element) => post.tags.includes(element))
        : true;
    })
    ?.filter((post) => {
      return search ? post.body.toLowerCase().includes(search) : true;
    });
  console.log(finalData);
  return finalData;
};
