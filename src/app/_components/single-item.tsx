"use client"

import { api } from "~/trpc/server";

interface Props {
    name: string
    id: number
}

export const SingleItem = (props: Props) => {
    const {name, id} = props
    const deletePost = api.post.delete.useMutation({})
    
     const handleClick = () => {
      deletePost({id})
    }

  return (
    <div onClick={handleClick}>item: {name ?? ''}</div>
  )
}
