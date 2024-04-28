/* eslint-disable react/prop-types */

const Filter = ({filteredTags}) => {
  return (
    <div className="flex gap-2 self-start flex-wrap mt-2">
        <p>Filters :</p>
        {filteredTags.map((tag) => {
            return <button key={tag}  className="text-white bg-blue-500 px-1  rounded-sm">{tag}</button>
        })}
    </div>
  )
}

export default Filter