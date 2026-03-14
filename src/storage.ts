import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Task } from './types.js';
const __dirname = dirname(fileURLToPath(import.meta.url));

const taskFilePath = join(__dirname, '..', 'tasks.json');
export async function loadTasks(): Promise<Task[]> {
  //what does Promise<Task[]> mean? i never saw a promise type
  if (!existsSync(taskFilePath)) {
    return [];}
    try{
    const fileContents=await readFile(taskFilePath,'utf-8');
    if (fileContents.trim()===''){
        return [];}

    const parsedTask=JSON.parse(fileContents) as Task[];//i don't understand this line, what does 'as Task[]' do?
    return parsedTask;}
    catch
    {
        console.error(
        'Warning: tasks.json is corrupted. Starting with an empty task list.'
        );
        return [];

    }

}
export async function saveTasks(tasks:Task[]) :Promise<void>{
    const jsonString=JSON.stringify(tasks,null,2);
    await writeFile(taskFilePath,jsonString,'utf-8');

}