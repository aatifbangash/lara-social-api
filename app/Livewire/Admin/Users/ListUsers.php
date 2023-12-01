<?php

namespace App\Livewire\Admin\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class ListUsers extends Component
{
    public ?Collection $users;
    public function mount()
    {
        $this->users = User::all();
    }

    public function render()
    {
        return view('livewire.admin.users.list-users')
            ->title("List Users - ");
    }
}
