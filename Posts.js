const originalPosts = [
  {
    title: 'How to run cpp file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'cpp',
  },
  {
    title: 'How to run ?',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'John',
      nickname: 'john1090'
    },
    tags: 'running',
  },
  {
    title: 'How to run cpp file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'cpp',
  },
  {
    title: 'How to run pascal file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'pascal',
  },
  {
    title: 'How computers work ?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis eius. Vitae, ad veniam. Consequuntur commodi nihil repellat voluptate repudiandae eligendi eum distinctio tenetur atque! Quidem officia maxime nulla architecto nemo quod porro saepe illo id nobis dolore, eum, dicta cum in ratione iste, error repellendus vel maiores. Possimus quo quisquam, tenetur, autem laboriosam nobis dolor doloremque maxime odio voluptate perspiciatis laborum! Dolorum dignissimos vero ab pariatur voluptate a explicabo maxime, commodi doloribus possimus nemo, velit repellat aliquid officiis voluptatibus?',
    author: {
      fullname: 'Empty',
      nickname: 'emp11'
    },
    tags: 'computer',
  },
  {
    title: 'How to run cpp file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'cpp',
  },
  {
    title: 'How to run ?',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'John',
      nickname: 'john1090'
    },
    tags: 'running',
  },
  {
    title: 'How to run cpp file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'cpp',
  },
  {
    title: 'How to run pascal file in terminal',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi perspiciatis quos, quis, officiis corrupti voluptas illo maiores debitis deserunt delectus voluptates provident quia minima molestias tempore veritatis obcaecati odio quaerat?',
    author: {
      fullname: 'Khoa Tran',
      nickname: 'trankhoa001'
    },
    tags: 'pascal',
  },
  {
    title: 'How computers work ?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis eius. Vitae, ad veniam. Consequuntur commodi nihil repellat voluptate repudiandae eligendi eum distinctio tenetur atque! Quidem officia maxime nulla architecto nemo quod porro saepe illo id nobis dolore, eum, dicta cum in ratione iste, error repellendus vel maiores. Possimus quo quisquam, tenetur, autem laboriosam nobis dolor doloremque maxime odio voluptate perspiciatis laborum! Dolorum dignissimos vero ab pariatur voluptate a explicabo maxime, commodi doloribus possimus nemo, velit repellat aliquid officiis voluptatibus?',
    author: {
      fullname: 'Empty',
      nickname: 'emp11'
    },
    tags: 'computer',
    replies: [
      {
        user: {
          fullname: 'Khoa',
          nickname: 'khoa'
        },
        content: 'Possimus quo quisquam, tenetur, autem laboriosam nobis dolor doloremque maxime odio voluptate perspiciatis laborum',
        time: 'Fri, 14 Aug 2020 14:06:18 GMT'
      },
      {
        user: {
          fullname: 'Vinh',
          nickname: 'vinh2309'
        },
        content: 'Autem laboriosam nobis dolor doloremque maxime odio voluptate perspiciatis laborum',
        time: 'Fri, 14 Aug 2020 14:45:18 GMT'
      }
    ]
  }
];

let result = [];
let clone = [...originalPosts];
while (clone.length > 0) {
  result.push(clone.splice(0, 5));
}

module.exports = result;