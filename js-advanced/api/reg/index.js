
const content = `asdfasdfa
    <RpaIcon icon='good' />
    asd
      <RpaIcon width={100} icon='good-job' />
      adad
       <RpaIcon
                  icon='block-close'
                  size='14px'
                  className='flow-content-tab-close'
                  onClick={(e) => {
                    onCloseTab(index);
                    e.stopPropagation();
                  }}
                />
    
    `

const rpaIconRegex = /(<RpaIcon [^>]*)(icon='([^']*))'([^>]*?>)/g;
const rst = content.replaceAll(rpaIconRegex, (search, ...args) => {
  // console.log('search', search)
  // args.forEach((item, index) => {
  //   console.log(`${index}: ${item}`)
  // })

  const componentName = args[2].split('-').map(item => item.at(0).toUpperCase() + item.substring(1)).join('');
  return `<${componentName}${args[3]}`
})

console.log('rst: ', rst);


