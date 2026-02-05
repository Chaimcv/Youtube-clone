import React from "react";

const CommentsContainer = () => {
  const commentsData = [             //Dummy comment-nesting  section implementation
    {
      name: "Akshay",
      text: "Comments...",
      replies: [],
    },
    {
      name: "Akshay 2",
      text: "Comments nesting",
      replies: [
        {
          name: "Akshay",
          text: "Comments...nested",
          replies: [
            {
              name: "Akshay",
              text: "Comments...",
              replies: [],
            },
          ],
        },
      ],
    },
     {
        name:"Akshay-last",
        text:"Comments...",
        replies:[]
}
  ];

  return (
    <div className="m-2 p-2">
      <h1 className="font-bold">Comments</h1>
    </div>
  );
};

export default CommentsContainer;
