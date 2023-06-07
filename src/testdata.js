export const templates = [
  {
    id: 1,
    title: "Template 1",
    description: "This is template 1",
    icon: "dashboard",
  },
  {
    id: 2,
    title: "Template 2",
    description: "This is template 2",
    icon: "dashboard",
  },
  {
    id: 3,
    title: "Template 3",
    description: "This is template 3",
    icon: "dashboard",
  },
]

// con collections with 5 items

export const collections = [
  {
    id: 1,
    title: "Collection 1",
    description: "This is collection 1",
    icon: "dashboard",
  },
  {
    id: 2,
    title: "Collection 2",
    description: "This is collection 2",
    icon: "dashboard",
  },
  {
    id: 3,
    title: "Collection 3",
    description: "This is collection 3",
    icon: "dashboard",
  },
  {
    id: 4,
    title: "Collection 4",
    description: "This is collection 4",
    icon: "dashboard",
  },
  {
    id: 5,
    title: "Collection 5",
    description: "This is collection 5",
    icon: "dashboard",
  },
  {
    id: 6,
    title: "Collection 6",
    description: "This is collection 6",
    icon: "dashboard",
  },
]

export const patterns = Array.from({ length: 12 }, (_, i) => {
  const id = i + 1 // array index starts from 0, so we add 1 to get the id
  return {
    id: id,
    title: `Pattern ${id}`,
    description: `This is a description for Pattern ${id}`,
    icon: "dashboard",
  }
})
