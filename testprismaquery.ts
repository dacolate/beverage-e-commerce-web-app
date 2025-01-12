import prisma from "@/lib/prisma";

async function testFollowersQuery() {
  const userId = "52r3yp2g7tvrc3ck"; // Replace with a test user ID
  const cursor = undefined; // Replace with a test cursor if needed
  const pageSize = 10;

  const posts = await prisma.post.findMany({
    where: {
      content: {
        contains: "#lol",
      },
    },orderBy: { createdAt: "desc" },
    take: pageSize + 1,
    cursor: cursor ? { id: cursor } : undefined,
  });

  console.log("Filters result:", posts);
}

testFollowersQuery()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
