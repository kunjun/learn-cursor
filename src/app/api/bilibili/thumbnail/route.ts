import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bvid = searchParams.get('bvid');

  if (!bvid) {
    return NextResponse.json({ error: 'BVID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`
    );
    const data = await response.json();
    
    if (data.data?.pic) {
      return NextResponse.json({ thumbnailUrl: data.data.pic });
    }
    
    return NextResponse.json({ error: 'Thumbnail not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch thumbnail' }, { status: 500 });
  }
} 