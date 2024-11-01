import Bool "mo:base/Bool";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Array "mo:base/Array";

actor {

  type Task = {
    text: Text;
    var completed: Bool;
  };

  stable var tasks : [Task] = [];

  public func addTask(taskText: Text) : async () {
    let newTask : Task = { text = taskText; var completed = false };
    tasks := Array.append(tasks, [newTask]);
  };

  public func getTasks() : async [(Text, Bool)] {
    return Array.map<Task, (Text, Bool)>(tasks, func (task) { (task.text, task.completed) });
  };

  public func updateTaskStatus(index: Nat, isCompleted: Bool) : async () {
    if (index < Array.size(tasks)) {
      tasks[index].completed := isCompleted;
    }
  };

  func areTasksEqual(task1: Task, task2: Task) : Bool {
    return task1.text == task2.text and task1.completed == task2.completed;
  };

  public func deleteTask(index: Nat) : async () {
    if (index < Array.size(tasks)) {
      tasks := Array.filter<Task>(tasks, func (task: Task) { not areTasksEqual(task, tasks[index]) });
    }
  };
}
