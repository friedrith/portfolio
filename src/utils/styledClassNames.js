import buildClassNames from 'classnames'

export default style => (...args) =>
  buildClassNames(
    args.map(arg => {
      if (typeof arg !== 'object') {
        return arg
      }
      return Object.keys(arg).reduce(
        (acc, key) => ({
          ...acc,
          [style[key]]: arg[key],
        }),
        {}
      )
    })
  )
