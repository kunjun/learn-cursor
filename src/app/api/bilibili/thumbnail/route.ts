import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.bilibili.com/x/web-interface/view?bvid=${videoId}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Bilibili API');
    }

    const data = await response.json();
    
    if (data.code !== 0) {
      throw new Error('Bilibili API error');
    }

    return NextResponse.json({ pic: data.data.pic });
  } catch (error) {
    console.error('Error fetching Bilibili thumbnail:', error);
    return NextResponse.json(
      { error: 'Failed to fetch thumbnail' },
      { status: 500 }
    );
  }
} 