import { FiTrash2 } from 'react-icons/fi'

export default function Card({children, data, handleToggle, handleDelete}: {children: React.ReactNode}) {
  const handleClick = (e) => {
    e.stopPropagation()
    handleToggle(e.currentTarget.id)
  }
  const handleClickDelete = (e) => {
    e.stopPropagation()
    handleDelete(e.currentTarget.parentElement.id)
  }
  return (
    <div className={`card ${data.completed ? 'card-completed' : ''}`} id={data.id} onClick={handleClick}>
      <div className="flex gap-3 flex-1">
        <input id={data.id} type="checkbox" readOnly={true} className="form-checkbox mt-[2px] dark:bg-gray-500 rounded-full text-purple-dark dark:border-blue" checked={data.completed} onClick={handleClick}/>
        <span>
          {children}
        </span>
      </div>
      <FiTrash2 className="text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 w-4 h-4" onClick={handleClickDelete}/>
    </div>
  )
}
