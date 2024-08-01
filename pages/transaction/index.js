import { Header } from "../../components/header.js"
import { Table } from "../../components/table.js"
import { users } from "../../lib/users.js"
import { reload } from "../../lib/utils.js"

const header = document.querySelector('.header')
const tbody = document.querySelector('tbody')


reload(users,header,Header)
reload(users,tbody, Table)