<?php

namespace App\Http\Controllers;

use App\Models\TodoItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoItemController extends Controller
{
    public function index()
    {
        $todoItems = TodoItem::all();

        return response()->json($todoItems);
    }

    public function create(Request $request)
    {
        $rules = [
            'name' => 'required|min:1|max:512',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(
                $validator->messages(), 400
            );
        };

        $todoItem = TodoItem::create($request->all());

        return response()->json($todoItem, 201);
    }

    public function update(Request $request, TodoItem $todoItem)
    {
        $rules = [
            'name' => 'required|min:1|max:512',
            'done' => 'required|boolean',
            'urgent' => 'required|boolean',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(
                $validator->messages(), 400
            );
        };

        $todoItem->update($request->all());

        return response()->json($todoItem);
    }

    public function delete(TodoItem $todoItem)
    {
        $todoItem->delete();

        return response()->json(null, 204);
    }
}
