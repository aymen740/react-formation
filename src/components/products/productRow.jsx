/**
 * 
 * 
 * @param {{name: string, stocked: boolean, price: string}}product
 *
 */

export function productRow ({product}) {

    const style = product.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
       <td>{product.price}</td>
    </tr>


}