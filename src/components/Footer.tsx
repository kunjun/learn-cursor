import Link from 'next/link';

interface LinkItem {
  name: string;
  href: string;
  external?: boolean;
}

interface Section {
  title: string;
  content?: React.ReactNode;
  links?: LinkItem[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections: Section[] = [
    {
      title: '关于',
      content: (
        <p className="mt-4 text-base text-gray-500">
          Cursor Guide 是一个专注于提供编程知识和资源的网站，致力于帮助开发者提升技能。
        </p>
      ),
    },
    {
      title: '快速链接',
      links: [
        { name: '首页', href: '/' },
        { name: '课程', href: '/courses' },
        { name: '博客', href: '/blog' },
      ],
    },
    {
      title: '联系我们',
      links: [
        // { name: 'GitHub', href: 'https://github.com/kunjun/cursor-guide', external: true },
        // { name: 'Twitter', href: 'https://twitter.com/cursor-guide', external: true },
        { name: '支持', href: '/support' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                {section.title}
              </h3>
              {section.content ? (
                section.content
              ) : (
                <ul className="mt-4 space-y-4">
                  {section.links?.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} Cursor Guide. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
}