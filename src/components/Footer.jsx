export default function Footer({ copy }) {
  return <footer>© {new Date().getFullYear()} Arthur Monserrat <span>— {copy.footer}</span></footer>
}
