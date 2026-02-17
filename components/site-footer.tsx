export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Learnwise. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5 text-xs text-muted-foreground" role="list">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
