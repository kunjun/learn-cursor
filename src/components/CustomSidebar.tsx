import Link from 'next/link';

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: '开始',
    children: [
      { title: '简介', href: '/docs/getting-started' },
      { title: '安装', href: '/docs/installation' },
      // 添加更多子菜单项
    ],
  },
  {
    title: '路由',
    children: [
      { title: '简介', href: '/docs/routing/introduction' },
      { title: '动态路由', href: '/docs/routing/dynamic-routes' },
      // 添加更多子菜单项
    ],
  },
  // 添加更多菜单项
];

function Sidebar() {
  return (
    <aside className="hidden lg:block w-64">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-5">
            <div className="flex items-center text-neutral-700">
              {item.children ? (
                <>
                  <svg
                    className="w-3 h-3 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 6 10"
                  >
                    <path d="M1 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                  <span>{item.title}</span>
                </>
              ) : (
                <Link href={item.href || '#'}>
                  <a className="flex items-center">{item.title}</a>
                </Link>
              )}
            </div>
            {item.children && (
              <ul className="ml-4 mt-2 border-l border-gray-200 pl-4">
                {item.children.map((child, idx) => (
                  <li key={idx} className="mt-2">
                    <Link href={child.href || '#'}>
                      <a className="flex items-center text-neutral-700 hover:text-blue-600">
                        {child.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export { Sidebar };