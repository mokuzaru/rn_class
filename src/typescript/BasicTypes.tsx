
export const BasicTypes = () => {

  const name: string = 'Misael'

  const age: number = 35

  const isActive: boolean = true

  const powers = [1, true, 'hola', {a:1, b:2, c:3}]

  powers.push('Next')
  return (
    <div>
      <h3>Tipos basicos</h3>

      {name} {age} {isActive ? 'true': 'false'}
      <br />

      {powers.join(', ')}

    </div>

  )
}
