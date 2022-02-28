export const withIcon = (Icon) => {
  return function WithIconComponent({ ...props }) {
    return <Icon {...props} />
  }
}

export default function ReactIcon({ icon, ...rest }) {
  const MdIcon = () => <>{icon}</>
  const className = ['me-2', 'cz-icon', rest.className]
    .filter(Boolean)
    .join(' ')
    .split(' ')
  const cl = [...Array.from(new Set(className))]
  return <span className={cl.join(' ')}>{withIcon(MdIcon)(rest)}</span>
}
