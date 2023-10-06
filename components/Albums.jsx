'use client'
import React, { useContext } from 'react'
import { AlbumsStore } from '@/context/Albums'
import AlbumCard from './AlbumCard'
import Link from 'next/link'

const Albums = () => {
    const { albums, artistName } = useContext(AlbumsStore)
    console.log(albums);
    return (
        <div className='flex flex-col justify-center items-center'>
            {
                albums?.length > 0 && <Link href='/search' className='cursor-pointer hover:text-green-300 duration-300 transition'>
                    Back to search
                </Link>
            }

            <div className='w-full flex flex-col justify-center items-center my-5'>
                {
                    albums?.length > 0 && <h1 className='py-4 text-4xl font-bold'>{artistName} Albums</h1>
                }
                <div className='max-w-[1440px] grid grid-cols-4 gap-4'>
                    {
                        albums ? albums?.map((album, index) => (
                            <AlbumCard key={index} img={album?.images[0]?.url} preview={album?.uri} name={album?.name} date={album?.release_date} tracks={album?.total_tracks} artist={album?.artists[0].name} />
                        ))
                            : <span>NO ALBUMS, PLEASE SEARCH AGAIN</span>
                    }
                </div>


            </div>
        </div>

    )
}

export default Albums