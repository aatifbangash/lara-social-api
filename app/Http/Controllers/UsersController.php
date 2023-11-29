<?php

namespace App\Http\Controllers;

use App\Exceptions\RaiseException;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{

    /**
     * @throws RaiseException
     */
    public function users(): AnonymousResourceCollection
    {
        if (!$users = User::all())
            throw new RaiseException(
                message: 'Users are not found',
                status: Response::HTTP_NOT_FOUND
            );

        return UserResource::collection($users);
    }

    /**
     * @throws RaiseException
     */
    public function user(int $userId): UserResource
    {
        if (!$user = User::find($userId))
            throw new RaiseException(
                message: "User ($userId) not found",
                status: Response::HTTP_NOT_FOUND
            );

        return UserResource::make($user);
    }
}
