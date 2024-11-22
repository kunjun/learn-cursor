'use client'

interface SidebarProps {
  categories: string[]
  tags: string[]
  selectedCategory: string
  selectedTags: string[]
  searchTerm: string
  onCategoryChange: (category: string) => void
  onTagsChange: (tags: string[]) => void
  onSearchChange: (term: string) => void
}

export function Sidebar({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  searchTerm,
  onCategoryChange,
  onTagsChange,
  onSearchChange
}: SidebarProps) {
  return (
    <aside className="w-64 bg-white p-6 border-r">
      <div className="mb-8">
        <input
          type="text"
          placeholder="搜索文章"
          className="w-full px-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">分类</h3>
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${selectedCategory === 'all' ? 'text-blue-600' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            全部
          </li>
          {categories.map(category => (
            <li
              key={category}
              className={`cursor-pointer ${selectedCategory === category ? 'text-blue-600' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">标签</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className={`px-2 py-1 text-sm rounded-full cursor-pointer
                ${selectedTags.includes(tag) 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => {
                const newTags = selectedTags.includes(tag)
                  ? selectedTags.filter(t => t !== tag)
                  : [...selectedTags, tag]
                onTagsChange(newTags)
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
} 