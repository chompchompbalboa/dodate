//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

//-----------------------------------------------------------------------------
// Mutations
//-----------------------------------------------------------------------------
export const createList = async () => {
	return axios.get('api/user')
}

