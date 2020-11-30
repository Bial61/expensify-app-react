import {setTextFilter,setEndDate,setStartDate,sortByAmount,sortBydate} from '../../redux/actions/filters'

test('should setup set text action object', () => {
    
    const result = setTextFilter('abc')
    expect(result).toEqual({
        type:'SET_TEXT',
        text:'abc'
    })
})

test('should setup set end date action object', () => {
     const result= setEndDate("12")
     expect(result).toEqual({
         type:'SET_END_DATE',
         endDate:"12"
     })
})


test('should setup sort by date action object', () => {
    
    const result = sortBydate()
    expect(result).toEqual({type:'SORT_BY_DATE'})
})
