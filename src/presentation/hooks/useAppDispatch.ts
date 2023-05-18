import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/infra/redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
