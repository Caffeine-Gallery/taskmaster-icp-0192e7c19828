export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addTask' : IDL.Func([IDL.Text], [], []),
    'deleteTask' : IDL.Func([IDL.Nat], [], []),
    'getTasks' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Bool))], []),
    'updateTaskStatus' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
