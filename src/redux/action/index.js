export const type = {
    SHOW_USERS:'SHOW_USERS'
}

export const dataSource=(dataSource)=>({
    type:type.SHOW_USERS,
    dataSource:dataSource
})