<?php

namespace App\Livewire\Admin\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;
use Livewire\WithPagination;

class ListUsers extends Component
{
    use WithPagination;

    public function render()
    {
        return view('livewire.admin.users.list-users', [
            'users' => User::paginate(15)
        ])
            ->title("List Users - ");
    }
}
