<?php

namespace App\Livewire;

use Auth;
use Livewire\Component;

class Home extends Component
{
    public bool $isLoggedIn;

    public function mount()
    {
//        if (!$this->isLoggedIn = Auth::check())
//            $this->redirectRoute('admin-login');
    }

    public function render()
    {
        return view('livewire.home')
            ->title('Lara Social Admin Panel');
    }
}
