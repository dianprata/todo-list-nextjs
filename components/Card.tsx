import { FiTrash2 } from 'react-icons/fi'
import * as React from 'react'

type CardProps = {
  children: React.ReactNode,
  data: {
    id: string,
    task: string,
    completed: boolean
  },
  handleToggle: (id: string) => void,
  handleDelete: (id: string) => void
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, data, handleToggle, handleDelete }, ref) => {
    const handleClick = (e: React.FormEvent<HTMLDivElement>) => {
      e.stopPropagation()
      handleToggle(e.currentTarget.id)
    }
    const handleClickDelete = (e: React.FormEvent<SVGElement>) => {
      e.stopPropagation()
      handleDelete(e.currentTarget.id)
    }
    return (
      <div className={`card ${data.completed ? 'card-completed' : ''}`} id={data.id} onClick={handleClick}>
        <div className="flex gap-3 flex-1">
          <input id={data.id} type="checkbox" readOnly={true} className="form-checkbox mt-[2px] dark:bg-gray-500 rounded-full text-purple-dark dark:border-blue" checked={data.completed} onClick={handleClick}/>
          <span>
            {children}
          </span>
        </div>
        <FiTrash2 id={data.id} className="text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 w-4 h-4" onClick={handleClickDelete}/>
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
