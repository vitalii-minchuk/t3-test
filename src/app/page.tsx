
import { CreatePost } from "~/app/_components/create-post";
import { SingleItem } from "~/app/_components/single-item";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost?.length ? (
        latestPost.map((el => (
          <SingleItem key={el.id} name={el.name} id={el.id} />
        )))
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
