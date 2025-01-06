import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-colors dark:border-gray-700 dark:bg-dark-secondary dark:text-gray-200">
      <h2 className="mb-3 text-lg font-bold text-gray-800 dark:text-gray-100">
        Task Details
      </h2>

      {/* Attachments */}
      {/* {task.attachments && task.attachments.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Attachments
          </h3>
          <div className="flex gap-4 overflow-x-auto">
            {task.attachments.map((attachment, index) => (
              <Image
                key={index}
                src={`/${attachment.fileURL}`}
                alt={attachment.fileName}
                width={100}
                height={60}
                className="rounded-md shadow"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src =
                    "/placeholder-image.png")
                }
              />
            ))}
          </div>
        </div>
      )} */}

      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="mb-4 flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`https://pmg-s3-images.s3.us-east-1.amazonaws.com/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}

      {/* Two-Column Layout */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">ID:</p>
          <p className="text-gray-900 dark:text-gray-100">{task.id}</p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">Title:</p>
          <p className="text-gray-900 dark:text-gray-100">{task.title}</p>
        </div>
        <div className="col-span-2">
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Description:
          </p>
          <p className="truncate text-gray-800 dark:text-gray-200">
            {task.description || "No description provided"}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Status:
          </p>
          <span>{task.status}</span>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Priority:
          </p>
          <span
            className={`inline-block rounded px-2 py-1 text-xs font-semibold ${
              task.priority === "High"
                ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                  : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
            }`}
          >
            {task.priority}
          </span>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">Tags:</p>
          <p className="truncate text-gray-800 dark:text-gray-200">
            {task.tags || "No tags"}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Start Date:
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Due Date:
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Author:
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            {task.author ? task.author.username : "Unknown"}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500 dark:text-gray-400">
            Assignee:
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            {task.assignee ? task.assignee.username : "Unassigned"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
