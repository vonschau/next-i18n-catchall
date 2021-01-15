import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    console.log(req.method);

    fs.readdir('./', (err, files) => {
        console.log(err?.message);
        console.log(files);
    });

    res.end('OK');
};
